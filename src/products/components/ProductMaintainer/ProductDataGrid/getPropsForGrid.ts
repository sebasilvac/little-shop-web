const properties = {
  BG_COLOR_PRIMARY: '#4338CA',
  FONT_COLOR_PRIMARY: 'white',
  BG_COLOR_SECONDARY: '#22c55e',
};

const colorSelection = 'rgb(59 130 246)';

const getPropsForGrid = () => {
  const { FONT_COLOR_PRIMARY } =
    properties;

  return {
    '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer': {
      display: "none"
    },
    '& .MuiDataGrid-cell:focus': {
      outline: 'none !important',
    },
    '& .MuiDataGrid-row': {
      '&': {
        fontSize: '1rem',
      },
      '&.Mui-selected': {
        backgroundColor: colorSelection,
        color: FONT_COLOR_PRIMARY,
        '&:hover': {
          backgroundColor: colorSelection,
          color: FONT_COLOR_PRIMARY,
        },
      },
    },
  };
};

export default getPropsForGrid;
