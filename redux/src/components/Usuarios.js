import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Usuarios extends Component {
  render() {
    return (
          <div>
              <h3>Usuario: {this.props.usuarios.active}</h3>
          </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usuarios: state.usuariosReducer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
