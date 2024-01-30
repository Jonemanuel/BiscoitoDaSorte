import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito (1).png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga em frente, você vai conseguir',
      'Você merece e já venceu',
      'A persistência é o caminho do êxito',
      'O que você pode fazer hoje, não deixe para amanhã',
      'Seja a mudança que você deseja ver no mundo',
      'Você é mais forte do que pensa',
      'Acredite em você mesmo e tudo será possível',
      'A única maneira de fazer um excelente trabalho é amar o que você faz',
      'O sucesso é a soma de pequenos esforços repetidos dia após dia',
      'Não tenha medo de desistir do bom para perseguir o ótimo',
      'O que quer que você pense sobre, você atrai',
      'A sua vida só melhora quando você se compromete a melhorar',
      'O único lugar onde o sucesso vem antes do trabalho é no dicionário',
      'Se você quer algo que nunca teve, precisa fazer algo que nunca fez',
      'O segredo para começar é quebrar a sua complexa e grande tarefa em pequenas tarefas',
      'Nunca é tarde demais para ser aquilo que sempre desejou ser',
      'O primeiro passo em direção ao sucesso é dado quando você se recusa a ser um refém do ambiente em que se encontra',
      'A melhor maneira de prever o futuro é criá-lo',
      'O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta',
      'A vida é o que acontece enquanto você está ocupado fazendo outros planos',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto (1).png'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },

  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    marginTop: 20,
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
