const initialState = [
  {
    name: "Book title",
    value: "",
    type: "text",
    fullWidth: true,
    key: "Book title",
  },
  {
    name: "Author",
    value: "",
    type: "select",
    fullWidth: true,
    key: "Author",
  },
  {
    name: "ISBN",
    value: "",
    type: "text",
    fullWidth: true,
    key: "ISBN",
  },
  {
    name: "Publisher",
    value: "",
    type: "select",
    fullWidth: true,
    key: "Publisher",
  },
  {
    name: "Date published",
    value: "",
    type: "date",
    fullWidth: false,
    key: "Date published",
  },
  {
    name: "Number of pages",
    value: "",
    type: "number",
    fullWidth: false,
    key: "Number of pages",
  },
  {
    name: "Format",
    value: "",
    type: "select",
    fullWidth: false,
    key: "Format",
  },
  {
    name: "Edition",
    value: "",
    type: "text",
    fullWidth: false,
    key: "Edition",
  },

  {
    name: "Edition language",
    value: "",
    type: "select",
    fullWidth: false,
    key: "Edition language",
  },
  {
    name: "Description",
    value: "",
    type: "multiline",
    fullWidth: true,
    key: "Description",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
