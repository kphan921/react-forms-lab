import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ''
  }
  
  handleTyping = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleTyping} type="text" name="message" id="message" />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
