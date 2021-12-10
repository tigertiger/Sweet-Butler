import React, {useState} from 'react'
import { MainPageLayout } from '../components/MainPageLayout';
import { Title } from '../components/Title';
import { Input } from '../components/Input';


export const Home = () => {
  return (
    <MainPageLayout>
      <Title subtitle="How are you feeling today?" />
      Home.
      <Input />
    </MainPageLayout>
  )
}
