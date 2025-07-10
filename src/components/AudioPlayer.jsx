import React from 'react';
import { GiPauseButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
class AudioPlayer extends React.Component {
  state = {
    playing: false,
    currentTime: 0,
    duration: 0
  }

  audioRef = React.createRef()

  handlePlay = () => {
    this.audioRef.current.play();
    this.setState({ playing: true });
  }

  handlePause = () => {
    this.audioRef.current.pause();
    this.setState({ playing: false });
  }

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.audioRef.current.currentTime,
      duration: this.audioRef.current.duration
    });
  }

  handleSeek = (event) => {
    const newTime = event.target.value;
    this.audioRef.current.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  render() {
    const { playing, currentTime, duration } = this.state;

    return (
      <div className='player'>
        <audio
          ref={this.audioRef}
          src={"/assets/99_Names_of_Allah_Best_Recitation(128k).mp3"} 
          onTimeUpdate={this.handleTimeUpdate}
        />
        <button onClick={playing ? this.handlePause : this.handlePlay}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer',  fontSize: '2.7rem',}}>
          {playing ? <GiPauseButton style={{color: '#00002e'}}/> : <FaPlay style={{color: '#00002e'}}/>}
        </button>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={this.handleSeek}
          style={{ width: '100%', margin: '10px 0' }}
        />
        <p style={{ fontSize: '1.8rem', fontFamily: 'Nunito', fontWeight: 'bold', color: '#00002e'}}>{this.formatTime(currentTime)} / {this.formatTime(duration)}</p>
      </div>
    );
  }
}

export default AudioPlayer;