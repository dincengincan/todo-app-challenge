import { useDispatch, useSelector } from 'react-redux';
import { filterButtons } from '../../constants/general';
import { ACTIONS } from '../../store';
import Button, { BUTTON_VARIANTS } from '../button/Button';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const selectedButton = useSelector((state) => state.selectedFilterButton);

  return (
    <>
      {filterButtons.map((filterButton) => {
        return (
          <Button
            key={filterButton.id}
            isSelected={filterButton.id === selectedButton.id}
            text={filterButton.text}
            variant={BUTTON_VARIANTS.FILTER}
            onClick={() =>
              dispatch({
                type: ACTIONS.SET_FILTER_BUTTON,
                payload: filterButton,
              })
            }
          />
        );
      })}
    </>
  );
};

export default FilterButtons;
