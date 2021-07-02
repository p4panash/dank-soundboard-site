import React from 'react';
import Command from './Command';

class CommandList extends React.Component {
  render() {
    let commandList = this.props.data.map((object) => 
      <Command
        key={"command-" + object.id} 
        title={object.title}
        source={object.source}
        audioType={object.audio_type}>
        {object.description}
      </Command>
    )

    return(
      <div style={{width: "100%"}}>
        {commandList}
      </div>
    )
  }
}

export default CommandList;