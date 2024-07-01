import { StyleSheet, ImageStyle, ViewStyle, TextStyle } from "react-native";

const styles = {
  container: (selectedJob: string, item: any): ViewStyle => ({
    backgroundColor: selectedJob === item.id ? 'lightgray' : 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  }),
  logoContainer: (selectedJob: string, item: any): ViewStyle => ({
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  }),
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // if you want a rounded image
  } as ImageStyle,
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  } as TextStyle,
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  } as ViewStyle,
  jobName: (selectedJob: string, item: any): TextStyle => ({
    fontSize: 14,
    fontWeight: selectedJob === item.id ? 'bold' : 'normal',
  }),
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  publisher: (selectedJob: string, item: any): TextStyle => ({
    fontSize: 12,
    color: 'gray',
  }),
  location: {
    fontSize: 12,
    color: 'gray',
  } as TextStyle,
};

export default styles;
