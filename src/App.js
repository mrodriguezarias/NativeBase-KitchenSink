import React from "react"
import { Root } from "native-base"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Header from "./screens/Header/"
import Header1 from "./screens/Header/1"
import Header2 from "./screens/Header/2"
import Header3 from "./screens/Header/3"
import Header4 from "./screens/Header/4"
import Header5 from "./screens/Header/5"
import Header6 from "./screens/Header/6"
import Header7 from "./screens/Header/7"
import Header8 from "./screens/Header/8"
import HeaderSpan from "./screens/Header/header-span"
import HeaderNoShadow from "./screens/Header/header-no-shadow"
import HeaderTransparent from "./screens/Header/header-transparent"
import BasicFooter from "./screens/footer/basicFooter"
import IconFooter from "./screens/footer/iconFooter"
import IconText from "./screens/footer/iconText"
import BadgeFooter from "./screens/footer/badgeFooter"
import Default from "./screens/button/default"
import Outline from "./screens/button/outline"
import Rounded from "./screens/button/rounded"
import Block from "./screens/button/block"
import Full from "./screens/button/full"
import Custom from "./screens/button/custom"
import Transparent from "./screens/button/transparent"
import IconBtn from "./screens/button/iconBtn"
import Disabled from "./screens/button/disabled"
import BasicCard from "./screens/card/basic"
import NHCardItemBordered from "./screens/card/carditem-bordered"
import NHCardItemButton from "./screens/card/carditem-button"
import NHCardImage from "./screens/card/card-image"
import NHCardShowcase from "./screens/card/card-showcase"
import NHCardList from "./screens/card/card-list"
import NHCardHeaderAndFooter from "./screens/card/card-header-and-footer"
import NHCardTransparent from "./screens/card/card-transparent"
import NHCardCustomBorderRadius from "./screens/card/card-custom-border-radius"
import BasicFab from "./screens/fab/basic"
import MultipleFab from "./screens/fab/multiple"
import FixedLabel from "./screens/form/fixedLabel"
import InlineLabel from "./screens/form/inlineLabel"
import FloatingLabel from "./screens/form/floatingLabel"
import PlaceholderLabel from "./screens/form/placeholder"
import StackedLabel from "./screens/form/stacked"
import RegularInput from "./screens/form/regular"
import UnderlineInput from "./screens/form/underline"
import RoundedInput from "./screens/form/rounded"
import IconInput from "./screens/form/iconInput"
import SuccessInput from "./screens/form/success"
import ErrorInput from "./screens/form/error"
import DisabledInput from "./screens/form/disabledInput"
import PickerInput from "./screens/form/pickerInput"
import Icons from "./screens/icon/icon"
import BasicIcon from "./screens/icon/basic"
import StateIcon from "./screens/icon/state"
import PlatformSpecificIcon from "./screens/icon/platform-specific"
import IconFamily from "./screens/icon/icon-family"
import RowNB from "./screens/layout/row"
import ColumnNB from "./screens/layout/column"
import NestedGrid from "./screens/layout/nested"
import CustomRow from "./screens/layout/customRow"
import CustomCol from "./screens/layout/customCol"
import BasicListSwipe from "./screens/listSwipe/basic-list-swipe"
import SwipeRowCustomStyle from "./screens/listSwipe/swipe-row-style"
import MultiListSwipe from "./screens/listSwipe/multi-list-swipe"
import NHBasicList from "./screens/list/basic-list"
import NHListItemSelected from "./screens/list/listitem-selected"
import NHListDivider from "./screens/list/list-divider"
import NHListSeparator from "./screens/list/list-separator"
import NHListHeader from "./screens/list/list-headers"
import NHListIcon from "./screens/list/list-icon"
import NHListAvatar from "./screens/list/list-avatar"
import NHListThumbnail from "./screens/list/list-thumbnail"
import NHListItemNoIndent from "./screens/list/listitem-noIndent"
import RegularPicker from "./screens/picker/regularPicker"
import PickerWithIcon from "./screens/picker/picker-with-icon"
import PlaceholderPicker from "./screens/picker/placeholderPicker"
import PlaceholderPickerNote from "./screens/picker/placeholderPickernote"
import BackButtonPicker from "./screens/picker/backButtonPicker"
import PickerTextItemText from "./screens/picker/picker-text-itemtext"
import HeaderPicker from "./screens/picker/headerPicker"
import HeaderStylePicker from "./screens/picker/headerStylePicker"
import CustomHeaderPicker from "./screens/picker/customHeaderPicker"
import BasicTab from "./screens/tab/basicTab"
import ConfigTab from "./screens/tab/configTab"
import ScrollableTab from "./screens/tab/scrollableTab"
import BasicSegment from "./screens/segment/SegmentHeader"
import SegmentHeaderIcon from "./screens/segment/SegmentHeaderIcon"
import BasicToast from "./screens/toast/basic-toast"
import ToastDuration from "./screens/toast/toast-duration"
import ToastPosition from "./screens/toast/toast-position"
import ToastType from "./screens/toast/toast-type"
import ToastText from "./screens/toast/toast-text"
import ToastButton from "./screens/toast/toast-button"
import RegularActionSheet from "./screens/actionsheet/regular"
import IconActionSheet from "./screens/actionsheet/icon"
import AdvSegment from "./screens/segment/segmentTab"
import SimpleDeck from "./screens/deckswiper/simple"
import AdvancedDeck from "./screens/deckswiper/advanced"
import HeaderNoLeft from "./screens/Header/header-noLeft"
import NHCustomRadio from "./screens/radio/custom"
import NHDefaultRadio from "./screens/radio/default"
import PickerWithIconStyle from "./screens/picker/picker-with-iconstyle"
import AccordionDefault from "./screens/accordion/accordion-default"
import AccordionIcon from "./screens/accordion/accordion-icon"
import AccordionIconStyle from "./screens/accordion/accordion-icon-style"
import AccordionHeaderContentStyle from "./screens/accordion/accordion-header-content-style"
import AccordionCustomHeaderContent from "./screens/accordion/accordion-custom-header-content"

import Home from "./screens/home/"
import Anatomy from "./screens/anatomy/"
import Footer from "./screens/footer/"
import NHBadge from "./screens/badge/"
import NHButton from "./screens/button/"
import NHCard from "./screens/card/"
import NHCheckbox from "./screens/checkbox/"
import NHDeckSwiper from "./screens/deckswiper/"
import NHFab from "./screens/fab/"
import NHForm from "./screens/form/"
import TextArea from "./screens/form/textArea"
import NHIcon from "./screens/icon/"
import ListSwipe from "./screens/listSwipe/"
import NHLayout from "./screens/layout/"
import NHList from "./screens/list/"
import NHRadio from "./screens/radio/"
import NHSearchbar from "./screens/searchbar/"
import NHSpinner from "./screens/spinner/"
import NHPicker from "./screens/picker/"
import NHTab from "./screens/tab/"
import NHThumbnail from "./screens/thumbnail/"
import NHTypography from "./screens/typography/"
import SideBar from "./screens/sidebar"
import Segment from "./screens/segment"
import NHToast from "./screens/toast/"
import Actionsheet from "./screens/actionsheet"
import NHAccordion from "./screens/accordion/"
import NHDatePicker from "./screens/datepicker/"

const DrawerNavigator = createDrawerNavigator()

const Drawer = (props) => (
  <DrawerNavigator.Navigator
    initialRouteName="Home"
    drawerContentOptions={{
      activeTintColor: "#e91e63",
    }}
    drawerContent={(props) => <SideBar {...props} />}
  >
    <DrawerNavigator.Screen name="Home" component={Home} />
    <DrawerNavigator.Screen name="Anatomy" component={Anatomy} />
    <DrawerNavigator.Screen name="Header" component={Header} />
    <DrawerNavigator.Screen name="Footer" component={Footer} />
    <DrawerNavigator.Screen name="NHBadge" component={NHBadge} />
    <DrawerNavigator.Screen name="NHButton" component={NHButton} />
    <DrawerNavigator.Screen name="NHCard" component={NHCard} />
    <DrawerNavigator.Screen name="NHCheckbox" component={NHCheckbox} />
    <DrawerNavigator.Screen name="NHDeckSwiper" component={NHDeckSwiper} />
    <DrawerNavigator.Screen name="NHFab" component={NHFab} />
    <DrawerNavigator.Screen name="NHForm" component={NHForm} />
    <DrawerNavigator.Screen name="NHIcon" component={NHIcon} />
    <DrawerNavigator.Screen name="NHLayout" component={NHLayout} />
    <DrawerNavigator.Screen name="NHList" component={NHList} />
    <DrawerNavigator.Screen name="ListSwipe" component={ListSwipe} />
    <DrawerNavigator.Screen name="NHRadio" component={NHRadio} />
    <DrawerNavigator.Screen name="NHSearchbar" component={NHSearchbar} />
    <DrawerNavigator.Screen name="NHSpinner" component={NHSpinner} />
    <DrawerNavigator.Screen name="NHPicker" component={NHPicker} />
    <DrawerNavigator.Screen name="NHTab" component={NHTab} />
    <DrawerNavigator.Screen name="NHThumbnail" component={NHThumbnail} />
    <DrawerNavigator.Screen name="NHTypography" component={NHTypography} />
    <DrawerNavigator.Screen name="Segment" component={Segment} />
    <DrawerNavigator.Screen name="NHToast" component={NHToast} />
    <DrawerNavigator.Screen name="Actionsheet" component={Actionsheet} />
    <DrawerNavigator.Screen name="NHAccordion" component={NHAccordion} />
    <DrawerNavigator.Screen name="NHDatePicker" component={NHDatePicker} />
  </DrawerNavigator.Navigator>
)

const StackNavigator = createStackNavigator()

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Drawer" headerMode="none">
        <StackNavigator.Screen name="Drawer" component={Drawer} />
        <StackNavigator.Screen name="Header1" component={Header1} />
        <StackNavigator.Screen name="Header2" component={Header2} />
        <StackNavigator.Screen name="Header3" component={Header3} />
        <StackNavigator.Screen name="Header4" component={Header4} />
        <StackNavigator.Screen name="Header5" component={Header5} />
        <StackNavigator.Screen name="Header6" component={Header6} />
        <StackNavigator.Screen name="Header7" component={Header7} />
        <StackNavigator.Screen name="Header8" component={Header8} />
        <StackNavigator.Screen name="HeaderSpan" component={HeaderSpan} />
        <StackNavigator.Screen
          name="HeaderNoShadow"
          component={HeaderNoShadow}
        />
        <StackNavigator.Screen name="HeaderNoLeft" component={HeaderNoLeft} />
        <StackNavigator.Screen
          name="HeaderTransparent"
          component={HeaderTransparent}
        />
        <StackNavigator.Screen name="BasicFooter" component={BasicFooter} />
        <StackNavigator.Screen name="IconFooter" component={IconFooter} />
        <StackNavigator.Screen name="IconText" component={IconText} />
        <StackNavigator.Screen name="BadgeFooter" component={BadgeFooter} />
        <StackNavigator.Screen name="Default" component={Default} />
        <StackNavigator.Screen name="Outline" component={Outline} />
        <StackNavigator.Screen name="Rounded" component={Rounded} />
        <StackNavigator.Screen name="Block" component={Block} />
        <StackNavigator.Screen name="Full" component={Full} />
        <StackNavigator.Screen name="Custom" component={Custom} />
        <StackNavigator.Screen name="Transparent" component={Transparent} />
        <StackNavigator.Screen name="IconBtn" component={IconBtn} />
        <StackNavigator.Screen name="Disabled" component={Disabled} />
        <StackNavigator.Screen name="BasicCard" component={BasicCard} />
        <StackNavigator.Screen
          name="NHCardItemBordered"
          component={NHCardItemBordered}
        />
        <StackNavigator.Screen
          name="NHCardItemButton"
          component={NHCardItemButton}
        />
        <StackNavigator.Screen name="NHCardImage" component={NHCardImage} />
        <StackNavigator.Screen
          name="NHCardShowcase"
          component={NHCardShowcase}
        />
        <StackNavigator.Screen name="NHCardList" component={NHCardList} />
        <StackNavigator.Screen
          name="NHCardHeaderAndFooter"
          component={NHCardHeaderAndFooter}
        />
        <StackNavigator.Screen
          name="NHCardTransparent"
          component={NHCardTransparent}
        />
        <StackNavigator.Screen
          name="NHCardCustomBorderRadius"
          component={NHCardCustomBorderRadius}
        />
        <StackNavigator.Screen name="SimpleDeck" component={SimpleDeck} />
        <StackNavigator.Screen name="AdvancedDeck" component={AdvancedDeck} />
        <StackNavigator.Screen name="BasicFab" component={BasicFab} />
        <StackNavigator.Screen name="MultipleFab" component={MultipleFab} />
        <StackNavigator.Screen name="FixedLabel" component={FixedLabel} />
        <StackNavigator.Screen name="InlineLabel" component={InlineLabel} />
        <StackNavigator.Screen name="FloatingLabel" component={FloatingLabel} />
        <StackNavigator.Screen
          name="PlaceholderLabel"
          component={PlaceholderLabel}
        />
        <StackNavigator.Screen name="StackedLabel" component={StackedLabel} />
        <StackNavigator.Screen name="RegularInput" component={RegularInput} />
        <StackNavigator.Screen
          name="UnderlineInput"
          component={UnderlineInput}
        />
        <StackNavigator.Screen name="RoundedInput" component={RoundedInput} />
        <StackNavigator.Screen name="IconInput" component={IconInput} />
        <StackNavigator.Screen name="SuccessInput" component={SuccessInput} />
        <StackNavigator.Screen name="ErrorInput" component={ErrorInput} />
        <StackNavigator.Screen name="DisabledInput" component={DisabledInput} />
        <StackNavigator.Screen name="PickerInput" component={PickerInput} />
        <StackNavigator.Screen name="TextArea" component={TextArea} />
        <StackNavigator.Screen name="Icons" component={Icons} />
        <StackNavigator.Screen name="BasicIcon" component={BasicIcon} />
        <StackNavigator.Screen name="StateIcon" component={StateIcon} />
        <StackNavigator.Screen
          name="PlatformSpecificIcon"
          component={PlatformSpecificIcon}
        />
        <StackNavigator.Screen name="IconFamily" component={IconFamily} />
        <StackNavigator.Screen name="RowNB" component={RowNB} />
        <StackNavigator.Screen name="ColumnNB" component={ColumnNB} />
        <StackNavigator.Screen name="NestedGrid" component={NestedGrid} />
        <StackNavigator.Screen name="CustomRow" component={CustomRow} />
        <StackNavigator.Screen name="CustomCol" component={CustomCol} />
        <StackNavigator.Screen name="NHBasicList" component={NHBasicList} />
        <StackNavigator.Screen
          name="NHListItemSelected"
          component={NHListItemSelected}
        />
        <StackNavigator.Screen name="NHListDivider" component={NHListDivider} />
        <StackNavigator.Screen
          name="NHListSeparator"
          component={NHListSeparator}
        />
        <StackNavigator.Screen name="NHListHeader" component={NHListHeader} />
        <StackNavigator.Screen name="NHListIcon" component={NHListIcon} />
        <StackNavigator.Screen name="NHListAvatar" component={NHListAvatar} />
        <StackNavigator.Screen
          name="NHListThumbnail"
          component={NHListThumbnail}
        />
        <StackNavigator.Screen
          name="NHListItemNoIndent"
          component={NHListItemNoIndent}
        />
        <StackNavigator.Screen
          name="BasicListSwipe"
          component={BasicListSwipe}
        />
        <StackNavigator.Screen
          name="SwipeRowCustomStyle"
          component={SwipeRowCustomStyle}
        />
        <StackNavigator.Screen
          name="MultiListSwipe"
          component={MultiListSwipe}
        />
        <StackNavigator.Screen name="RegularPicker" component={RegularPicker} />
        <StackNavigator.Screen
          name="PickerWithIcon"
          component={PickerWithIcon}
        />
        <StackNavigator.Screen
          name="PlaceholderPicker"
          component={PlaceholderPicker}
        />
        <StackNavigator.Screen
          name="PlaceholderPickerNote"
          component={PlaceholderPickerNote}
        />
        <StackNavigator.Screen
          name="BackButtonPicker"
          component={BackButtonPicker}
        />
        <StackNavigator.Screen
          name="PickerTextItemText"
          component={PickerTextItemText}
        />
        <StackNavigator.Screen name="HeaderPicker" component={HeaderPicker} />
        <StackNavigator.Screen
          name="HeaderStylePicker"
          component={HeaderStylePicker}
        />
        <StackNavigator.Screen
          name="CustomHeaderPicker"
          component={CustomHeaderPicker}
        />
        <StackNavigator.Screen
          name="PickerWithIconStyle"
          component={PickerWithIconStyle}
        />
        <StackNavigator.Screen name="NHCustomRadio" component={NHCustomRadio} />
        <StackNavigator.Screen
          name="NHDefaultRadio"
          component={NHDefaultRadio}
        />
        <StackNavigator.Screen name="BasicTab" component={BasicTab} />
        <StackNavigator.Screen name="ConfigTab" component={ConfigTab} />
        <StackNavigator.Screen name="ScrollableTab" component={ScrollableTab} />
        <StackNavigator.Screen name="BasicSegment" component={BasicSegment} />
        <StackNavigator.Screen name="AdvSegment" component={AdvSegment} />
        <StackNavigator.Screen
          name="SegmentHeaderIcon"
          component={SegmentHeaderIcon}
        />
        <StackNavigator.Screen name="BasicToast" component={BasicToast} />
        <StackNavigator.Screen name="ToastDuration" component={ToastDuration} />
        <StackNavigator.Screen name="ToastPosition" component={ToastPosition} />
        <StackNavigator.Screen name="ToastType" component={ToastType} />
        <StackNavigator.Screen name="ToastText" component={ToastText} />
        <StackNavigator.Screen name="ToastButton" component={ToastButton} />
        <StackNavigator.Screen
          name="RegularActionSheet"
          component={RegularActionSheet}
        />
        <StackNavigator.Screen
          name="IconActionSheet"
          component={IconActionSheet}
        />
        <StackNavigator.Screen
          name="AccordionDefault"
          component={AccordionDefault}
        />
        <StackNavigator.Screen name="AccordionIcon" component={AccordionIcon} />
        <StackNavigator.Screen
          name="AccordionIconStyle"
          component={AccordionIconStyle}
        />
        <StackNavigator.Screen
          name="AccordionHeaderContentStyle"
          component={AccordionHeaderContentStyle}
        />
        <StackNavigator.Screen
          name="AccordionCustomHeaderContent"
          component={AccordionCustomHeaderContent}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default () => (
  <Root>
    <AppNavigator />
  </Root>
)
