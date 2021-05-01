import React from 'react';
import YesNoQuestion from '../../../../components/yes-no-question/YesNoQuestion';

interface PersonYesNoQuestionProps {
    onYes: () => void;
    onNo: () => void;
}

const PersonYesNoQuestion: React.FC<PersonYesNoQuestionProps> = ({ onYes, onNo }: PersonYesNoQuestionProps) => (
    <YesNoQuestion
        question="Do you remember anyone from your dream?"
        onYes={onYes}
        onNo={onNo}
    />
);

export default PersonYesNoQuestion;
