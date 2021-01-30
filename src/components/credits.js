/** @jsx jsx */
import { jsx, css } from 'theme-ui';

const Credits = () => (
  <div css={css({
    alignSelf: "center",
    fontSize: 0,
    "& > a": {
      fontWeight: 'bold',
      textDecoration: "none",
      color: 'primary',
    }
  })}>
      Icons: makkuro kurosuke by Fede Macca from the Noun Project
  </div>
);

export default Credits;