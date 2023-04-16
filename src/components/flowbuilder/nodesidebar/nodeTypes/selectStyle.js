export const colorStyles = {
    control: (styles) => ({
      ...styles,
      border: "none",
      background: "transparent",
      padding: 0,
      minHeight: "20px",
      outline: "none",
      boxShadow: 0,
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: "12px",
      color: "var(--primary-black)",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused || isSelected ? "var(--primary-black)" : "#fff",
      color: isFocused || isSelected ? "#fff" : "var(--primary-black)",
      fontSize : 12
    }),
    valueContainer : (styles)=>({...styles,fontSize : 12}),
    menu: (styles) => ({
      ...styles,
    }),
    menuList: (styles) => ({
      ...styles,
      padding: 0
    })
  };