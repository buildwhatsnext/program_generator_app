import styles from './display.loader.module.scss';

export interface ILoadingMessage {
  msg?: string;
}

export default function LoadingSection(props: ILoadingMessage) {
  const { msg } = props;
  const defaultMsg = 'Loading...';

  return (
    <div className={styles.loading}>
      { msg ?? defaultMsg }
    </div>
  )
}