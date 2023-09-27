import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewDuration: {
    alignItems: 'center',
    backgroundColor: '#E7F7FF',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  txtCountDown: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#ef4444',
  },
  txtDuration: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#64748b',
  },
  contentTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    lineHeight: 22,
    color: '#1e293b',
  },
  inputSearch: {
    padding: 10,
    height: 200,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    textAlignVertical: 'top',
    marginTop: 8,
    borderRadius: 8,
    textAlign: 'left',
  },
  viewChooseFile: {
    borderRadius: 6,
    marginTop: 16,
    padding: 6,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnChoose: {
    backgroundColor: '#d1d5db',
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  txtChoose: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#1e293b',
  },
  txtFileSelect: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#334155',
  },
  txt3: {
    fontFamily: 'Poppins',
    fontSize: 12,
    marginTop: 10,
    lineHeight: 18,
    color: '#64748b',
    fontStyle: 'italic',
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  btnSend: {
    backgroundColor: '#0f172a',
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  txtBtnSend: {
    fontFamily: 'Poppins',
    borderColor: '#334155',
    fontSize: 13,
    color: '#fff',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#000',
    marginBottom: 12,
  },
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  lable: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: '#000',
    width: 150,
  },
  txtItem: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#5C5C5C',
  },
  txtDescription: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#666',
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#0A2D61',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins',
  },
  txtBtn: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
  },
  btnRetake: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#F46647',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtRetake: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#fff',
    fontWeight: '500',
  },
  btnFinishCourse: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFinishCourse: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#fff',
  },
});
