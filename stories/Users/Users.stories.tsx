import React from 'react'
import Users from '../../src/components/Users'
import { UserTiny } from '../../src/reducers/follows'
import { FollowState } from '../../src/reducers/follows'

export default {
  title: 'Users',
  component: Users,
  excludeStories: /.*Data$/,
};

const followsData: FollowState = {
  followings: [{
    uid: 'akkynv4v3v8d5evx',
    name:'ビルゲイツ',
    photoUrl: 'https://weblio.hs.llnwd.net/e7/img/dict/binbi/biuu002.png',
  },
    {
      uid: 'z5y5f5xmzs95k6b3',
      name:'太郎',
      photoUrl: 'https://cdn-natgeo.nikkeibp.co.jp/atcl/gallery/020500145/06.jpg?__scale=w:1190,h:791&_sh=0af0100980',
    }],
  followers: [{
    uid: 'p2qfpb2gvxrzedu2',
    name:'tono',
    photoUrl: 'https://storage.tenki.jp/storage/static-images/suppl/article/image/9/97/971/9711/1/large.jpg',
  },
    {
      uid: 'i4ac4evjvhc7cv5x',
      name:'坂本龍馬',
      photoUrl: 'https://cdn-ak.f.st-hatena.com/images/fotolife/k/kiichangazie/20171203/20171203131011.png',
    }],
}

const usersData: UserTiny[] = [
  {
    uid: 'akkynv4v3v8d5evx',
    name:'ビルゲイツ',
    photoUrl: 'https://weblio.hs.llnwd.net/e7/img/dict/binbi/biuu002.png',
  },
  {
    uid: '4sra3r4zibfrzp4i',
    name:'かず',
    photoUrl: 'http://ドラマシリコンバレー.com/content/images/siliconvalley/richard.jpg',
  }
]

export const usersStory = () => <Users follows={followsData} searchedResult={usersData} searchUserAction={null} />

usersStory.story = {
  name: 'Users'
}
