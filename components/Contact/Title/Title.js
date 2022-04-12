import { useState, useEffect } from 'react';

import styles from './Title.module.scss';

export default function Title() {
    const question1 = ['Do', 'you', 'want', 'to', 'work', 'with', 'me?']
    const answer1 = 'Yes!'

    return (
        <div className={styles.title}>
            <div className={styles.question}>
                {
                    question1.map(word => {
                        return (
                            <p key={word.id} className={styles.questionWord}>{word}</p>
                        )
                    })
                }
            </div>
            <div className={styles.answer}>
                <p>{answer1}</p>
            </div>
        </div>
    )
}