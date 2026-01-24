import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground text-sm animate-pulse">Loading...</p>
            </div>
        </div>
    );
};
