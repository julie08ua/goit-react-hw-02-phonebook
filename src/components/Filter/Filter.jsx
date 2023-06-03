import PropTypes from 'prop-types';
import {FilterWrap, Text,FilterInput} from './Filter.styled';

export const Filter = ({ value, changeFilter }) => (
    <FilterWrap>
        <Text>Find contacts by name</Text>
    <FilterInput
        type="text"
        value={value}
        onChange={changeFilter} />
    </FilterWrap>
);


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};