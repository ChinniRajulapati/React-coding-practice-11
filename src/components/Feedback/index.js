import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiSelected: true}

  changeEmoji = () => {
    this.setState({isEmojiSelected: false})
  }

  feedbackSection = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="list-container"
              onClick={this.changeEmoji}
            >
              <img
                alt={emoji.name}
                className="emoji-image"
                src={emoji.imageUrl}
              />
              <p className="name">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouSection = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-container">
        <img className="love-emoji" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="emoji-heading">Thank You!</h1>
        <p className="feed-back-description">
          We will use your feed back to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiSelected} = this.state

    return (
      <div className="app-container">
        <div className="inner-container">
          {isEmojiSelected ? this.feedbackSection() : this.thankYouSection()}
        </div>
      </div>
    )
  }
}

export default Feedback
