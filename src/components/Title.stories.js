import Title from "./Title"

export default {
    title : "Title",
    component: Title,
    argTypes:{
        title : {control : "text"},
        textColor: {control : "text"}
    }
}

const Template = (args) => <Title {...args} />

export const RedTitle = Template.bind({});
RedTitle.args = {
    title: "red Title",
    textColor:"red"
}

export const StorybookTitle = (args) => {
    return <Title {...args} />
}
