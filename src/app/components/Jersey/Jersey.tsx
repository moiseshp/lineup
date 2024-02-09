import './jersey.css';

const SIZES = {
  SCALE: 1,
  BORDER_WIDTH: 1,
  JERSEY: {
    WIDTH: 45,
    HEIGHT: 45,
  },
  DORSAL: {
    WIDTH: 30,
    BORDER_BOTTOM_RADIUS: 6,
  },
  ARM: {
    WIDTH: 8,
    HEIGHT: 20,
    BORDER_TOP_RADIUS: 10,
    BORDER_BOTTOM_RADIUS: 5,
  },
  NECK: {
    WIDTH: 18,
    HEIGHT: 7,
    MARGIN_LEFT: 9,
    BORDER_RADIUS: 100,
    BORDER_BOTTOM_RADIUS: 20,
  },
};

const COLORS = {
  BORDER_COLOR: 'black',
  BACKGROUND_COLOR: 'red',
};

const STRIPE_TYPES = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
  BOX: 'box',
};

const Jersey = ({
  mainColor = COLORS.BACKGROUND_COLOR,
  secondaryColor = COLORS.BACKGROUND_COLOR,
  size = SIZES.SCALE,
  stripeType = STRIPE_TYPES.VERTICAL,
  hasStripes = true,
}) => {
  return (
    <div
      className="jersey"
      style={{
        width: SIZES.JERSEY.WIDTH,
        height: SIZES.JERSEY.HEIGHT,
        transform: `scale(${size})`,
      }}
    >
      <div
        className="arm"
        style={{
          width: SIZES.ARM.WIDTH,
          height: SIZES.ARM.HEIGHT,
          borderWidth: SIZES.BORDER_WIDTH,
          borderTopLeftRadius: SIZES.ARM.BORDER_TOP_RADIUS,
          borderBottomLeftRadius: SIZES.ARM.BORDER_BOTTOM_RADIUS,
          borderRight: 0,
          borderColor: COLORS.BORDER_COLOR,
          backgroundColor: mainColor,
        }}
      />
      <div
        className="dorsal"
        style={{
          width: SIZES.DORSAL.WIDTH,
          borderWidth: SIZES.BORDER_WIDTH,
          borderBottomLeftRadius: SIZES.DORSAL.BORDER_BOTTOM_RADIUS,
          borderBottomRightRadius: SIZES.DORSAL.BORDER_BOTTOM_RADIUS,
          borderColor: COLORS.BORDER_COLOR,
          backgroundColor: mainColor,
        }}
      >
        <div
          className="neck"
          style={{
            borderRadius: SIZES.NECK.BORDER_RADIUS,
            borderTopLeftRadius: SIZES.NECK.BORDER_BOTTOM_RADIUS,
            borderTopRightRadius: SIZES.NECK.BORDER_BOTTOM_RADIUS,
            borderWidth: SIZES.BORDER_WIDTH,
            borderColor: COLORS.BORDER_COLOR,
            width: SIZES.NECK.WIDTH,
            height: SIZES.NECK.HEIGHT,
            marginLeft: -SIZES.NECK.MARGIN_LEFT,
            borderTop: 0,
            backgroundColor: mainColor,
          }}
        />
        {hasStripes && (
          <div className={`stripes ${stripeType}`}>
            <div
              style={{
                backgroundColor: secondaryColor,
                borderColor: COLORS.BORDER_COLOR,
                borderWidth: SIZES.BORDER_WIDTH,
              }}
            />
            <div
              style={{
                backgroundColor: secondaryColor,
                borderColor: COLORS.BORDER_COLOR,
                borderWidth: SIZES.BORDER_WIDTH,
              }}
            />
            <div
              style={{
                backgroundColor: secondaryColor,
                borderColor: COLORS.BORDER_COLOR,
                borderWidth: SIZES.BORDER_WIDTH,
              }}
            />
            <div
              style={{
                backgroundColor: secondaryColor,
                borderColor: COLORS.BORDER_COLOR,
                borderWidth: SIZES.BORDER_WIDTH,
              }}
            />
          </div>
        )}
      </div>
      <div
        className="arm"
        style={{
          width: SIZES.ARM.WIDTH,
          height: SIZES.ARM.HEIGHT,
          borderWidth: SIZES.BORDER_WIDTH,
          borderTopRightRadius: SIZES.ARM.BORDER_TOP_RADIUS,
          borderBottomRightRadius: SIZES.ARM.BORDER_BOTTOM_RADIUS,
          borderLeft: 0,
          borderColor: COLORS.BORDER_COLOR,
          backgroundColor: mainColor,
        }}
      />
    </div>
  );
};

export default Jersey;
