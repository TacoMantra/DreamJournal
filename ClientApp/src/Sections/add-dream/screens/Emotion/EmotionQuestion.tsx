import React from 'react';
import { EmotionType } from '../../../../models/dream/Dream';
import { getEnumStringValues } from '../../../../utils';
import AutocompleteQuestion from '../../../../components/autocomplete-question';

interface IEmotionQuestionProps {
    onComplete: (string) => void;
}

const EmotionQuestion: React.FC<IEmotionQuestionProps> = ({ onComplete }: IEmotionQuestionProps) => (
    <AutocompleteQuestion
        question="How did the dream make you feel?"
        options={getEnumStringValues(EmotionType)}
        label="Emotion"
        onComplete={onComplete}
    />
);

export default EmotionQuestion;
