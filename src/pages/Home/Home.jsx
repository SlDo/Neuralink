import React from 'react';
import './style.scss';
import { MainBlock } from '../../components/Main/Main';
import { Header } from '../../components/Header/Header';
import {Group} from '../../components/Group/Group';
import {PageCard} from '../../components/PageCard/PageCard';
import redBrain from '../../images/red-brain.png';
import blueBrain from '../../images/blue-brain.png';
import greenBrain from '../../images/green-brain.png';
import {FutureBlock} from '../../components/Future/Future';
import {Footer} from '../../components/Footer/Footer';

export function Home() {
  return (
    <>
      <Header />
      <MainBlock />
      <Group oriented='horizontal' className='pages-list'>
        <PageCard backgroundColor='var(--color-red)' title={'Understanding \n the Brain'} src={redBrain} linkLabel='Science' linkTo='/'/>
        <PageCard backgroundColor='var(--color-blue)' title={'Interfacing \n with the Brain'} src={blueBrain} linkLabel='Approach' linkTo='/'/>
        <PageCard backgroundColor='var(--color-green)' title={'Engineering \n with the Brain'} src={greenBrain} linkLabel='Applications' linkTo='/'/>
      </Group>
      <FutureBlock />
      <Footer />
    </>
  )
}
