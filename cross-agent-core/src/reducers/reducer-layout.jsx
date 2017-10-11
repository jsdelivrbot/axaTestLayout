export default function() {
  return [
    {
      type: "AxaLayoutContainer",
      attr: "fuild",
      id: 5,
      content: [
        {
          type: "AxaLayoutRow",
          attr: "",
          id: 6,
          content: [
            {
              type: "AxaLayoutCol",
              attr: "pt-3 pl-3",
              id: 1,
              content: [
                {
                  type: "AxaBtnAxa",
                  id: 2,
                  attr: {
                    type: "lg",
                    label: "Hello world",
                    link: "",
                    icon: ""
                  },
                  content: ""
                },
                {
                  type: "AxaBtnAxa",
                  id: 9,
                  attr: {
                    type: "lg",
                    label: "Large AXA Btn 2",
                    link: "",
                    icon: ""
                  },
                  content: ""
                }
              ]
            },
            {
              type: "AxaLayoutCol",
              attr: "pt-3 pl-3",
              id: 3,
              content: [
                {
                  type: "AxaBtnAxa",
                  id: 7,
                  attr: {
                    type: "",
                    label: "Default AXA Btn",
                    link: "",
                    icon: ""
                  },
                  content: ""
                }
              ]
            },
            {
              type: "AxaLayoutCol",
              attr: "pt-3 pl-3",
              id: 4,
              content: [
                {
                  type: "AxaBtnAxa",
                  id: 8,
                  attr: {
                    type: "sm",
                    label: "Small AXA Btn",
                    link: "",
                    icon: ""
                  },
                  content: ""
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
