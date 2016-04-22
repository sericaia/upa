import React, {
  StyleSheet,
  Component,
  View,
  ListView,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';

import AddTask from './AddTask';
import standardBtn from './commonstyle/standardBtn';
import subTitle from './commonstyle/subTitle';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  listView: {
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F7EDBF',
    margin: 1,
    padding: 5
  },
  listItemTitle: {
    fontSize: 18
  },
  listItemDuration: {
  },
  btnArea: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  }
});

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.value)
    };
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.value)
    });
  }

  renderTask(value) {
    return (
      <View style={styles.listItem} key={value.id}>
        <Text style={styles.listItemTitle}>{value.title}</Text>
        <Text style={styles.listItemDuration}>{value.duration} minutes</Text>
      </View>
    );
  }

  handleStart(id) {
    this.props.decreaseTimer(id);
  }

  handleAddTask() {

    // TOCHANGE
    this.props.navigator.push({
      component: AddTask,
      title: 'Add Task',
      passProps: {
        addTask: this.props.addTask
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={subTitle}>Upa Task List</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderTask}
          style={styles.listView}
        />

        <Text>{ JSON.stringify(this.props.value) }</Text>

        <View style={styles.btnArea}>
          <TouchableWithoutFeedback
            onPress={this.handleStart.bind(this, 0)}>
            <Text style={standardBtn}>Start</Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={this.handleAddTask.bind(this)}>
            <Text style={standardBtn}>Add Task</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

TaskList.propTypes = {
  value: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      duration: React.PropTypes.number
    })
  ),
  decreaseTimer: React.PropTypes.func,
  addTask: React.PropTypes.func,
};
