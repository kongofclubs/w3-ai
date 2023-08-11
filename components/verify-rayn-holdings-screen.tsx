interface VeryRaynHoldingsScreenProps {
  isLoading: boolean;
}

export function VeryRaynHoldingsScreen({ isLoading }: VeryRaynHoldingsScreenProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to RYAN AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          {!isLoading
            ? 'You have to hold at least 1,000,000 RAYN to ask questions!'
            : 'Verifying RAYN holdings...'
          }
        </p>
      </div>
    </div>
  )
}
