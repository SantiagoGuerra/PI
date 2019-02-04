const theme = {}
const rem = px => `${px / 16}rem`

// colors

theme.mainColor  = `#10AC84`
theme.darkColor = `#636363`
theme.lightColor = `#B0B0B0`


// Typography

// Font-Family
theme.fontFamily = `'Poppins', sans-serif`
// Scale - 1.250
theme.superSmallFontSize = rem(8.16)
theme.extraSmallFontSize = rem(10.24)
theme.smallFontSize = rem(12.80)
theme.normalFontSize = rem(16)
theme.largeFontSize = rem(22)
theme.extraLargeFontSize = rem(25)
theme.superLargeFontSize = rem(31.25)


// Spacing
theme.superSmallSpacingSize = rem(2)
theme.extraSmallSpacingSize = rem(4)
theme.smallSpacingSize = rem(16)
theme.normalSpacingSize = rem(24)
theme.largeSpacingSize = rem(32)
theme.extraLargeSpacingSize = rem(48)
theme.superlargeSpacingSize = rem(62)


// Border
theme.smallBorder = rem(4)
theme.normalBorder = rem(8)
theme.largeBorder = rem(30)

// Size Icons

theme.smallIconSize = rem(24)
theme.normalIconSize = rem(80)
theme.largeIconSize = rem(120)

export default theme