const style = () => {
  return {
    logIn: {
      marginTop: 50,
    },
    body: { width: 380, margin: "auto" },
    title: {
      width: 380,
      margin: "auto",
      paddingLeft: 30,
      fontSize: 15,
      fontWeight: 700,
      "& > p": { marginLeft: 24 },
    },
    form: {
      display: "flex",
      flexDirection: "column",
      margin: 24,
      "& > p": {
        textAlign: "center",
        marginTop: 20,
        fontSize: 15,
      },
      "& > p > span": {
        color: "#007791",
        cursor: "pointer",
      },
      "& > p > span:hover": {
        color: "#003845",
      },
      "& > button": {
        width: "100%",
        height: 48,
        borderRadius: 3,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 700,
      },
      "& > button > i": {
        width: "15%",
        textAlign: "center",
      },
    },

    loginFacebook: {
      backgroundColor: "#1a538a",
      border: "none",
      color: "#fff",
      outline: "none",
      textAlign: "left",
      justifyContent: "flex-start",
      "&:hover": {
        backgroundColor: "#164675",
        cursor: "pointer",
      },
      textTransform: "none",
    },
    loginGoogle: {
      backgroundColor: "#fff",
      border: 1,
      borderColor: "#dedfe0",
      borderStyle: "solid",
      fontSize: 10,
      color: "#29303b",
      outline: "none",
      textAlign: "left",
      justifyContent: "flex-start",
      textTransform: "none",
      "&:hover": {
        color: "#003845",
        backgroundColor: "#f2f3f5",
        cursor: "pointer",
      },
    },
    loginApple: {
      backgroundColor: "#fff",
      border: 1,
      borderColor: "#dedfe0",
      borderStyle: "solid",
      color: "#29303b",
      marginBottom: 15,
      outline: "none",
      textAlign: "left",
      justifyContent: "flex-start",
      textTransform: "none",
      "&:hover": {
        color: "#003845",
        backgroundColor: "#f2f3f5",
        cursor: "pointer",
      },
    },

    textField: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 50,
      border: 1,
      borderStyle: "solid",
      borderColor: "#989586",
      borderRadius: 5,
      marginBottom: 10,
      "& > i": {
        fontSize: 16,
        color: "#cacbcc",
        marginLeft: 10,
        marginRight: 10,
      },
    },
    input: {
      border: "none",
      fontSize: 20,
      outline: "none",
    },
    btn: {
      lowerCase: true,
      width: "100%",
      height: 48,
      backgroundColor: "#ec5252",
      border: "none",
      borderRadius: 3,
      fontSize: 16,
      fontWeight: 700,
      color: "#fff",
      marginTop: 10,
      outline: "none",
      "&:hover": {
        backgroundColor: "#992337",
        cursor: "pointer",
      },
    },
    text1: {
      fontSize: 10,
      color: "#29303b",
      textAlign: "center",
    },
    span: {
      color: "#007791",
      cursor: "pointer",
    },
    text2: {
      display: "flex",
      justifyContent: "center",
      fontSize: 15,
      color: "#29303b",
      textAlign: "center",
    },
    span2: {
      color: "#007791",
      cursor: "pointer",
      fontWeight: 700,
      "&:hover": {
        color: "#003845",
      },
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 50,
      paddingRight: 50,
      borderBottom: 1,
      borderBottomColor: "#dcdacb",
      borderBottomStyle: "solid",
      borderTop: 1,
      borderTopColor: "#dcdacb",
      borderTopStyle: "solid",
      marginTop: 50,
      paddingTop: 25,
      paddingBottom: 25,
    },
    footerText: {
      fontSize: 19,
      fontWeight: 700,
      color: "#3c3b37",
      width: "40%",
      "& > p": {
        margin: "auto",
      },
    },
    span3: {
      color: "#007791",
      cursor: "pointer",
      "&:hover": {
        color: "#003845",
      },
    },
    footerSym: {
      width: "60%",
      textAlign: "right",
      "& > img": {
        marginLeft: 20,
      },
    },
  };
};
export default style;
