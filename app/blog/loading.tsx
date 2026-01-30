import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
    return(
      <html lang='en'>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />

      </html>
    );
}