import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

import standardBtn from './commonstyle/standardBtn';
import subTitle from './commonstyle/subTitle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  },
  searchInput: {
    height: 30,
    backgroundColor: '#f7f7f7',
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center'
  }
});

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      duration: ''
    };
  }

  handleTitleChange(ev) {
    this.setState({
      title: ev.nativeEvent.text
    });
  }
  handleDurationChange(ev) {
    this.setState({
      duration: ev.nativeEvent.text
    });
  }

  handleAddTask() {
    //add task
    this.props.addTask(this.state);

    //reset values
    this.setState({
      title: '',
      duration: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={subTitle}>Add a new task</Text>

        <TextInput
          style={styles.searchInput}
          value={this.state.title}
          placeholder="Task Title"
          onChange={this.handleTitleChange.bind(this)} />

        <TextInput
          style={styles.searchInput}
          value={this.state.duration}
          placeholder="Minutes"
          onChange={this.handleDurationChange.bind(this)} />

        <TouchableHighlight
          onPress={this.handleAddTask.bind(this)}
          underlayColor="white">
          <Text style={standardBtn}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AddTask.propTypes = {
  addTask: React.PropTypes.func,
};
