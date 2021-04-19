import Link from 'next/link';
import React from 'react';
import s from './style.module.scss';

export const MovieCard = () => {

    return (
        <div className={s.card}>
            <img className={s['card__img']} src="https://br.web.img3.acsta.net/pictures/19/09/17/19/29/5316438.jpg" alt="titulo do filme"/>
            <div className={s['card__info']}>
                <h3>Titulo do Filme</h3>
                <h4>00/00/0000</h4>
                <div className={s['card__info__textWrapper']}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <Link href="/detail">Saiba mais &gt;</Link>
            </div>
        </div>
    );
}