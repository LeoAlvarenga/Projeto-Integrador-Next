import React from 'react';
import s from './style.module.scss';

const Detail: React.FC = () => {
  return (
  <div className={s.container}>
      <img className={s['container__img']} src="https://br.web.img3.acsta.net/pictures/19/09/17/19/29/5316438.jpg" alt="Titulo do filme"/>
      <div className={s['container__content']}>
          <h1>Titulo do Filme</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className={s.infoWrapper}>
              <div className={s['infoWrapper__info']}>
                  <span>Data de Lançamento</span>
                  <p>00/00/0000</p>
              </div>
              <div className={s['infoWrapper__info']}>
                  <span>Duração</span>
                  <p>2h10min</p>
              </div>
              <div className={s['infoWrapper__info']}>
                  <span>Receita</span>
                  <p>R$100000000</p>
              </div>
          </div>
      </div>
  </div>)
}

export default Detail;