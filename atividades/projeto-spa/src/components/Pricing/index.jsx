import React from 'react';
import { Button } from '../Button';
import './styles.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Preços</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>R$24.99</h4>
                <p>por mês</p>
                <ul className='pricing__container-features'>
                  <li>100 Transações</li>
                  <li>2% Cash Back</li>
                  <li>R$20.000 de Limite</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolher plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>R$49.99</h4>
                <p>por mês</p>
                <ul className='pricing__container-features'>
                  <li>1000 Transações</li>
                  <li>3.5% Cash Back</li>
                  <li>R$100.000 de Limite</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Escolher plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>R$99.99</h4>
                <p>por mês</p>
                <ul className='pricing__container-features'>
                  <li>Transações ilimitadas</li>
                  <li>5% Cash Back</li>
                  <li>Gasto Ilimitado</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolher plano
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;