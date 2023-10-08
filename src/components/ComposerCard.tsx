import { ReactNode } from "react";
import { ComposerWork } from "../composerWork";
import { currentPuzzle } from "../dailyPuzzle";

type Props = {
    guess: ComposerWork;
};

function ComposerCard(props: Props) {
    const { guess } = props;
    const { puzzleAnswer } = currentPuzzle;

    const composerCorrect = (guess: ComposerWork): boolean =>
        guess.composer === puzzleAnswer.composer;

    const renderCardTitle = (
        text: string,
        correct: boolean = true
    ): ReactNode => (
        <div className="flex justify-between">
            <span>{text}</span>
            <span>{correct ? "✅" : "❌"}</span>
        </div>
    );

    return (
        <div
            className={`block min-w-[12rem] flex-grow rounded-lg text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-cyan-500 mr-2`}
        >
            <div className="p-2">
                <h5 className="mb-1 text-sm md:text-base font-medium leading-tight text-neutral-50">
                    {renderCardTitle("Composer", composerCorrect(guess))}
                </h5>
                <p className="text-xs md:text-sm leading-normal text-neutral-100">
                    {guess.composer}
                </p>
            </div>
        </div>
    );
}

export default ComposerCard;