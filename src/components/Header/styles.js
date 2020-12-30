const style = () => {
  return {
    header: {
      flexDirection: "row",
      display: "flex",
      height: 72,
      alignItems: "center",
      boxShadow: [0, 0, 0, 10, "grey"],
    },
    logo: {
      width: 110,
      marginLeft: 15,
      cursor: "pointer",
    },
    categories: {
      fontSize: 14,
      marginLeft: 24,
      fontWeight: 400,
      color: "#73726c",
      "&:hover": { cursor: "pointer", color: "#0f7c90" },
    },
    form: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 20,
      border: "1px",
      borderStyle: "solid",
      borderColor: "#989586",
      borderRadius: 25,
      width: 542,
      height: 46,
      alignItems: "center",
      backgroundColor: "#fbfbf8",
    },
    iconSearch: {
      color: "#73726c",
      marginLeft: 10,
      cursor: "pointer",
      fontSize: 24,
    },
    input: {
      border: "none",
      outline: "none",
      height: 40,
      marginLeft: 10,
      fontSize: 14,
      width: "80%",
      backgroundColor: "#fbfbf8",
    },
    udemyContent: {
      color: "#ffffff",
      display: "none",
      position: "absolute",
      backgroundColor: "#e9d8f4",
      minWidth: 160,
      zIndex: 1,
    },
    udemy: {
      position: "relative",
      display: "inline-block",
      fontSize: 14,
      marginLeft: 24,
      fontWeight: 400,
      color: "#73726c",
      cursor: "pointer",
      "&:hover": {
        color: "#0f7c90",
        udemyContent: { display: "block" },
      },
    },
    iconCart: {
      color: "#73726c",
      cursor: "pointer",
      fontSize: 24,
      marginLeft: 20,
      "&:hover": {
        color: "#0f7c90",
      },
    },
    button: {
      width: 100,
      height: 40,
      fontWeight: 700,
      borderStyle: "solid",
      cursor: "pointer",
      borderRadius: 5,
    },
    btnLogin: {
      width: 100,
      height: 40,
      fontWeight: 700,
      border: 1,
      borderStyle: "solid",
      cursor: "pointer",
      borderRadius: 5,
      fontSize: 14,
      marginLeft: 20,
      color: "#2896a9",
      borderColor: "#2896a9",
      backgroundColor: "#ffffff",
      textAlign: "center",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#ffffff",
        color: "#007791",
        borderColor: "#007791",
      },
    },
    btnSignup: {
      width: 100,
      height: 40,
      fontWeight: 700,
      borderStyle: "solid",
      cursor: "pointer",
      borderRadius: 5,
      fontSize: 14,
      marginLeft: 10,
      color: "#ffffff",
      borderColor: "#0f7c90",
      backgroundColor: "#0f7c90",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#29303b",
      },
    },
  };
};
export default style;
