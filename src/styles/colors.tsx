const palletes = {
  lightTheme: ["#160f29", "#246a73", "#368f8b", "#f3dfc1", "#ddbea8"],
};

export var pallete = palletes.lightTheme;
export function setPallete(palleteName: keyof typeof palletes): void {
  pallete = palletes[palleteName];
}
