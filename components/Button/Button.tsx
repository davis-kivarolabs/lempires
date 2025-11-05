'use client'
import styles from './Button.module.scss';

export default function Button({ label, onClick, children }: { label?: string; onClick: () => void; children: any }) {
  return <button className={styles.button} onClick={onClick} >{children}</button>;
}

export function PrimaryButton({ label, textColor, bgColor, onClick }: { label: string; textColor?: string; bgColor?: string; onClick?: () => void }) {
  return <button onClick={onClick} style={{ color: textColor, backgroundColor: bgColor }} className={`${styles.primary_button}`}>{label}</button>;
}
