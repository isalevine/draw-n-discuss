import React, {Component} from 'react';
import {ActionCable} from 'react-actioncable-provider';
import {HEADERS, API_ROOT} from '../constants';
import { CompactPicker } from 'react-color';

class Canvas extends Component {
  constructor () {
    super ()
    this.state = {
      color: '#000000'
    }

    this.ctx = null
    this.rect = null
    this.canvas = null

    // this.currentPosition = {x: 0, y: 0}
    // this.previousPosition = {x: 0, y: 0}
    //
    // this.lineStart = {x: 0, y: 0}
    // this.lineEnd = {x: 0, y: 0}

    this.drawing = false

    this.paths = []

  }

  componentDidMount() {
    let canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d')
    this.ctx = ctx
    this.rect = canvas.getBoundingClientRect()
    this.canvas = canvas
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
      color: this.state.color,
      list: [],
      strokeWidth: 1
    }
  }

  handleMouseUpOrLeave = () => {
    this.drawing = false;
    this.sendPaths();
  }

  handleMouseDown = () => {
    this.paths.push(this.makePath());
    this.drawing = true;
  }

  handleMouseMove = (e) => {
    if (!this.drawing) return;

    let x = ~~((e.clientX - this.rect.left) * 10) / 10
    let y = ~~((e.clientY - this.rect.top) * 10) / 10
    this.paths[this.paths.length - 1].list.push(x, y);
    this.draw();
  }

  handleChangeComplete = (color) => {
    this.setState({
      color: color.hex
    })
  }

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
          onMouseUp={this.handleMouseUpOrLeave}
          onMouseLeave={this.handleMouseUpOrLeave}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        />
        <CompactPicker
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    )
  }

}

export default Canvas
