// src/components/Box/Box.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Box from './index';

const meta = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // 让组件在画布中居中显示
    docs: {
      description: {
        component: '一个固定尺寸的蓝色盒子组件，宽高为20单位，带有白色文字。',
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础展示
export const Basic: Story = { };
