import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {numero : 0, botao : 'COMEÇAR'}
    this.timer = null;

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai() {
    if(this.timer != null) {
      let s = this.state
      //PARAR O TIMER
      clearInterval(this.timer)
      this.timer = null
      s.botao = 'CONTINUAR'

      this.setState(s)
    } else {
      //COMEÇAR O TIMER
      this.timer = setInterval(() => {
        let s = this.state
        s.numero += 0.1
        s.botao = 'PARAR'
        this.setState(s)
      }, 100);
    }
  }

  limpar() {
    if(this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let s = this.state
    s.numero = 0
    s.botao = 'COMEÇAR'
    this.setState(s)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/relogio.png')} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.vai}>
            <Text style={styles.textBotao}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textBotao} onPress={this.limpar}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#2c1f30'
  },

  timer : {
    color : '#baa07a',
    fontSize : 80,
    fontWeight : 'bold',
    backgroundColor : 'transparent',
    marginTop : -160
  },

  botaoArea : {
    paddingTop : 80,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },

  botao : {
    backgroundColor : '#886532',
    justifyContent : 'center',
    alignItems : 'center',
    flex : 1,
    height : 50,
    margin : 10,
    borderRadius : 25,
    borderWidth : 2,
    borderColor : '#ffffff'
  },

  textBotao : {
    fontSize : 15,
    fontWeight : 'bold',
    color : '#ffffff'
  }
});
