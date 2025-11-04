'use client'
import styles from './BreadCrumbs.module.scss';

import React from 'react'

const BreadCrumbs = ({ title, color }: { title: string; color?: string; }) => {
    return (
        <div className={styles.bread_crumbs} >
            <h2 style={{ color: color }} >{title}  /</h2>
        </div>
    )
}

export default BreadCrumbs
