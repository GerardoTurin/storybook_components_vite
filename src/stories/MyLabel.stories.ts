import { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../components/MyLabel";


const meta = {
    title: 'MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['normal', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
            }
        },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>;




export default meta;
type Story = StoryObj<typeof meta>;



export const Basic: Story = {
    args: {
        label: 'Basic Label'
    }
};


export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        size: 'h1',
        allCaps: true
    }
};


export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        size: 'h2',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color Label',
        size: 'h3',
        fontColor: 'green'
    }
};


export const CustomBackground: Story = {
    args: {
        label: 'Custom Background Label',
        size: 'h4',
        fontColor: 'white',
        backgroundColor: 'black'
    }
};


