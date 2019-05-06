import React, {Component} from 'react';
import {ActionCable} from 'react-actioncable-provider';
import {HEADERS, API_ROOT} from '../constants';

class Canvas extends Component {
  constructor () {
    super ()

    this.ctx = null
    this.rect = null
    this.canvas = null

    this.currentPosition = {x: 0, y: 0}
    this.previousPosition = {x: 0, y: 0}

    this.lineStart = {x: 0, y: 0}
    this.lineEnd = {x: 0, y: 0}

    this.drawing = false
    // this.pressed = false
    // this.moving = false

    this.paths = []

  }

  componentDidMount() {
    let canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d')
    this.ctx = ctx
    this.rect = canvas.getBoundingClientRect()
    this.canvas = canvas
    // this.mainLoop()
  }

  draw = () => {
    console.log("this.paths: ", this.paths)

    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.paths.forEach(path => {
      this.ctx.lineWidth = path.strokeWidth;
      this.ctx.strokeStyle = path.color;
      this.ctx.beginPath();
      const list = path.list;
      this.ctx.moveTo(list[0], list[1]);
      for (let i = 2; i < list.length; i += 2) {
        this.ctx.lineTo(list[i], list[i + 1]);
      }
      this.ctx.stroke();
    })
  }

  makePath = () => {
    return {
      color: 'black',
      list: [],
      strokeWidth: 1
    }
  }

  // this.canvas.onmouseup = canvas.onmouseleave = e => {
  //   this.drawing = false;
  // }
  handleMouseUpOrLeave = () => {
    this.drawing = false;
    this.sendPaths();
  }

  // this.canvas.onmousedown = e => {
  //   this.paths.push(makePath());
  //   this.drawing = true;
  // }
  handleMouseDown = () => {
    this.paths.push(this.makePath());
    this.drawing = true;
  }

  // this.canvas.onmousemove = e => {
  //   if (!drawing) return;
  //
  //   let x = ~~((e.clientX - this.rect.left) * 10) / 10
  //   let y = ~~((e.clientY - this.rect.top) * 10) / 10
  //   this.paths[paths.length - 1].list.push(x, y);
  //   this.draw();
  // }
  handleMouseMove = (e) => {
    if (!this.drawing) return;

    let x = ~~((e.clientX - this.rect.left) * 10) / 10
    let y = ~~((e.clientY - this.rect.top) * 10) / 10
    this.paths[this.paths.length - 1].list.push(x, y);
    this.draw();
  }

  // data to be an array of objects with coordinates: ex. [ {x: 1, y: 1}, {x: 2, y: 2}]
  //
  // draw = (line) => {
  //   const { ctx } = this.state;
  //     ctx.beginPath();
  //     ctx.moveTo(line[0].x, line[0].y);
  //     ctx.lineTo(line[1].x, line[1].y);
  //     ctx.strokeStyle = "black";
  //     ctx.lineWidth = 2;
  //     ctx.stroke();
  // }
  //
  //
  // handleMouseDown = (ev) => {
  //   this.pressed = true;
  //   this.lineStart = {x: ev.clientX, y: ev.clientY}
  // }
  //
  // handleMouseUp = (ev) => {
  //   this.pressed = false;
  //   this.lineEnd = {x: ev.clientX, y: ev.clientY}
  //   this.lineHistory.push([this.lineStart, this.lineEnd])
  // }
  //
  // handleMouseMove = (ev) => {
  //   let xx = ev.clientX;
  //   let yy = ev.clientY;
  //   this.currentPosition = {x: xx, y: yy}
  //   this.moving = true;
  // }
  //
  //
  //
  // mainLoop = () => {
  //   if (this.pressed && this.moving && this.state.pos_prev) {
  //     this.lineHistory.forEach(line => {
  //       this.draw(line)
  //     })
  //     // fetch(`${API_ROOT}/canvas`, {
  //     //   method: "POST",
  //     //   headers: HEADERS,
  //     //   body: JSON.stringify(this.lineHistory)
  //     // })
  //     this.moving = false;
  //   }
  //
  //   this.setState({pos_prev: {x: this.state.pos.x, y: this.state.pos.y}});
  //   setTimeout(this.mainLoop, 250);
  // }

  handleReceivedPaths = (paths) => {
    console.log('handleReceivedPaths', paths)
    this.paths = paths._json
    this.draw()
  }

  sendPaths = () => {
    console.log('json', JSON.stringify(this.paths))
    fetch(`${API_ROOT}/canvas`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.paths)
    })
    .catch(err => {
      console.log({err})
    })
  }

  render() {
    return (
      <div>
        <ActionCable
          channel={{channel: 'CanvasChannel'}}
          onReceived={this.handleReceivedPaths}
        />
        <canvas
          id="canvas"
          width="500"
          height="500"
          style={{"borderStyle": "solid", "borderWidth": "3px", "borderColor": "black"}}
          onMouseUp={this.handleMouseUpOrLeave}
          onMouseLeave={this.handleMouseUpOrLeave}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        />
      </div>
    )
  }

}

export default Canvas
