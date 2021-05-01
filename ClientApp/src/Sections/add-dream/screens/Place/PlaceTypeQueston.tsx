import React from 'react';
import { PlaceType } from '../../../../models/place/Place';
import { getEnumStringValues } from '../../../../utils';
import AutocompleteQuestion from '../../../../components/autocomplete-question';

interface PlaceTypeQuestionProps {
    onComplete: (string) => void;
}

const PlaceTypeQuestion: React.FC<PlaceTypeQuestionProps> = ({ onComplete }: PlaceTypeQuestionProps) => (
    <AutocompleteQuestion
        question="Where did the dream take place?"
        options={getEnumStringValues(PlaceType)}
        label="Place type"
        onComplete={onComplete}
    />
);

export default PlaceTypeQuestion;
