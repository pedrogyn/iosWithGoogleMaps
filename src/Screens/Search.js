import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import SearchMapComponent from '../Components/SearchMapComponent';
import MapCursor from '../Components/MapCursor';
import GymsList from '../Components/GymsList';

import LinearGradient from 'react-native-linear-gradient';
import { rgba } from 'polished';
import SearchBarComponent from '../Components/SearchBarComponent';
import NavbarComponent from '../Components/NavbarComponent';

const linearColors = [
  rgba('white', 1),
  rgba('white', 0.9),
  rgba('white', 0.7),
  rgba('white', 0.5),
  rgba('white', 0.0)
];

const style = StyleSheet.create({
  linearStyle: {
    position: 'absolute',
    justifyContent: 'flex-start',
    height: 350,
    top: 0,
    // paddingTop: 15,
    width: '100%'
  }
});

export default class Search extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <SearchMapComponent />
          <LinearGradient colors={linearColors} style={style.linearStyle}>
            <NavbarComponent />
            <SearchBarComponent />
          </LinearGradient>
          <GymsList gyms={gyms} />
        </View>
     </SafeAreaView>
    );
  }
}

const gyms = [
  {
    id: 285079,
    title: 'Academia Bluefit - Vila Olímpia',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/426232/logo_logo-01.jpg',
    activities: [
      {
        id: 156106,
        title: 'Musculação + Aulas'
      },
      {
        id: 3273872,
        title: 'Aulas'
      }
    ],
    rating: 4.53,
    address: 'Avenida Doutor Cardoso de Melo, 1191 - São Paulo - SP',
    location: {
      latitude: -23.5986007,
      longitude: -46.6851913
    }
  },
  {
    id: 245201,
    title: 'Crossfit Black Sheep - Vila Olimpia',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/1201974/logo_yigdGB8jpuKsMWgWSVJ44AUgMa0AfzVk.jpg',
    activities: [
      {
        id: 61370,
        title: 'Crossfit'
      },
      {
        id: 320535,
        title: 'Sigma Body'
      }
    ],
    rating: 4.88,
    address: 'Rua Lourenço Marques, 275 - São Paulo - SP',
    location: {
      latitude: -23.5985695,
      longitude: -46.68567580000001
    }
  },
  {
    id: 312731,
    title: 'Crossfit Mitra - Unidade Bandeirantes',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/561725/logo_12009729_418287801714625_4478787536289540496_n.jpg',
    activities: [
      {
        id: 188399,
        title: 'Crossfit'
      }
    ],
    rating: 0,
    address: 'Av. dos Bandeirantes, 812 - Vila Olimpia, São Paulo - SP, Brasil',
    location: {
      latitude: -23.5996512,
      longitude: -46.6859032
    }
  },
  {
    id: 23321,
    title: 'Crossfit SP',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/71749/logo_logo_crossfit_sp.png',
    activities: [
      {
        id: 22805,
        title: 'Aulas'
      }
    ],
    rating: 4.67,
    address: 'Rua Alvorada, 1084, São Paulo ',
    location: {
      latitude: -23.599152,
      longitude: -46.6826652
    }
  },
  {
    id: 380351,
    title: 'AR BOX',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/1420716/logo_7cdin5-JMqj2Z1rqaiTZZnipeqUi1yF5.jpeg',
    activities: [
      {
        id: 285020,
        title: 'Zumba'
      },
      {
        id: 300058,
        title: 'Cross Training'
      }
    ],
    rating: 5,
    address: 'Rua Alvorada,1258 - Vila Olímpia -  SP',
    location: {
      latitude: -23.5980433,
      longitude: -46.6827836
    }
  },
  {
    id: 237911,
    title: 'X Action - Vila Olímpia',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/224360/logo_STYLE_GUIDE_ATIVIDADES_Page_1.jpg',
    activities: [
      {
        id: 49309,
        title: 'Aulas'
      },
      {
        id: 49310,
        title: 'Cross Train'
      },
      {
        id: 49311,
        title: 'X MMA'
      },
      {
        id: 49312,
        title: 'Funcional'
      },
      {
        id: 49313,
        title: 'Jiu Jitsu'
      },
      {
        id: 78962,
        title: 'Muay Thai'
      },
      {
        id: 181634,
        title: 'Yoga'
      },
      {
        id: 184251,
        title: 'Yogaction'
      },
      {
        id: 184252,
        title: 'Iniciação Acrobática'
      },
      {
        id: 184253,
        title: 'Flexa action'
      },
      {
        id: 209137,
        title: 'Lutas'
      }
    ],
    rating: 4.67,
    address: 'Rua Gomes de Carvalho, 891, Vila Olimpia - SP',
    location: {
      latitude: -23.5986673,
      longitude: -46.6820661
    }
  },
  {
    id: 332163,
    title: 'Alzi Rigaud Estética e Pilates',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/671660/logo_Avatar_Academias__1_.jpg',
    activities: [
      {
        id: 205596,
        title: 'Pilates'
      }
    ],
    rating: 5,
    address:
      'Av. Dr. Cardoso de Melo, 807 - Vila Olimpia, São Paulo - SP, Brasil',
    location: {
      latitude: -23.5999471,
      longitude: -46.6817733
    }
  },
  {
    id: 293519,
    title: 'UGOLF Americas - Pullman Vila Olimpia',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/480630/logo_19429791_1909531775980674_2273761840513683480_n.jpeg',
    activities: [
      {
        id: 169870,
        title: 'Golf'
      }
    ],
    rating: 0,
    address: 'R. Olimpíadas, 205 - Vila Olimpia, São Paulo - SP, 04551-000',
    location: {
      latitude: -23.595893,
      longitude: -46.68441800000001
    }
  },
  {
    id: 521,
    title: 'Reebok Sports Club - Vila Olímpia',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/216837/logo_logo_reebok03.jpg',
    activities: [
      {
        id: 71335,
        title: 'Musculação + Aulas + Piscina ou Crossfit'
      }
    ],
    rating: 4.88,
    address: 'R. Olimpíadas, 205 - Itaim Bibi, São Paulo, 04551-000, Brasil',
    location: {
      latitude: -23.5956099,
      longitude: -46.6844016
    }
  },
  {
    id: 200,
    title: 'Companhia Athletica - Kansas',
    logo:
      'https://gympass-staging-images-us.s3.amazonaws.com/image/filename/60161/logo_Logo_Cia_Athletica.jpg',
    activities: [
      {
        id: 8396,
        title: 'Musculação'
      },
      {
        id: 18146,
        title: 'Musculação + Aulas + Piscina'
      }
    ],
    rating: 4.8,
    address: 'Rua Kansas, 1582 - Itaim Bibi, São Paulo - SP, 04558-005, Brasil',
    location: {
      latitude: -23.6003587,
      longitude: -46.688975
    }
  }
];
