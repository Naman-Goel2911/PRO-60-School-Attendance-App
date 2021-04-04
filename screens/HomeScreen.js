import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students: 0,
    };
  }

  getAttendance = async () => {
    var class_ref = await db.ref('Bal-Bharati/').on('value', (data) => {
      var all_students = [];
      var class_a = data.val();
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({ all_students: all_students });
    });
  };

  updateAttendance = (roll_no, status) => {
    var id = '';
    if (roll_no <= 9) {
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }

    var today = new Date();
    var dd = today.getDate();
    var mn = today.getMonth();

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mn < 10) {
      mn = '0' + mn;
    }
    today = dd + '-' + mn + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref('Bal-Bharati/' + ref_path);
    class_ref.update({
      [today]: status,
    });
  };
  render() {
    return (
      <View>
        <Text style={styles.names}>Slappy</Text>
        <TouchableOpacity
          style={styles.presentButton}
          onPress={() => {
            this.updateAttendance('roll1', 'present');
          }}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.absentButton}
          onPress={() => {
            this.updateAttendance('roll1', 'absent');
          }}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.names}>Frizzy Goblet</Text>
        <TouchableOpacity
          style={styles.presentButton}
          onPress={() => {
            this.updateAttendance('roll2', 'present');
          }}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.absentButton}
          onPress={() => {
            this.updateAttendance('roll2', 'absent');
          }}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.names}>Jack</Text>
        <TouchableOpacity
          style={styles.presentButton}
          onPress={() => {
            this.updateAttendance('roll3', 'present');
          }}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.absentButton}
          onPress={() => {
            this.updateAttendance('roll3', 'absent');
          }}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.names}>Luke</Text>
        <TouchableOpacity
          style={styles.presentButton}
          onPress={() => {
            this.updateAttendance('roll4', 'present');
          }}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.absentButton}
          onPress={() => {
            this.updateAttendance('roll4', 'absent');
          }}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.names}>Andrew</Text>
        <TouchableOpacity
          style={styles.presentButton}
          onPress={() => {
            this.updateAttendance('roll5', 'present');
          }}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.absentButton}
          onPress={() => {
            this.updateAttendance('roll5', 'absent');
          }}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SummaryScreen');
          }}
          style={styles.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  names: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Times New Roman',
  },
  presentButton: {
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 3,
    textAlign: 'center',
    backgroundColor: 'lime',
  },
  absentButton: {
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 3,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  submitButton: {
    marginTop: 20,
    padding: 15,
    paddingLeft: 100,
    paddingRight: 100,
    alignSelf: 'center',
    borderWidth: 5,
    backgroundColor: 'cyan',
  },
});
