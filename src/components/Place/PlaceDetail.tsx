import { PlaceInfo, getGooglePlaceDetail } from '@/apis/google';
import Button from '@/components/Button';
import Map from '@/components/Map';
import Icon from '@/components/icon/Common';
import Colors from '@/styles/Color';
import { GOOGLE_API_KEY } from '@env';
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Linking,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PlaceCard from './PlaceCard';

interface PlaceDetailProps {
  goBack: () => void;
  handleEvent: (displayName: string, primaryTypeDisplayName?: string) => void;
  id: string;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({
  goBack,
  handleEvent,
  id,
}) => {
  const insets = useSafeAreaInsets();

  const [placeDetail, setPlaceDetail] = useState<PlaceInfo | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScaleUp, setIsScaleUp] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchPlaceDetail = async () => {
      try {
        const data = await getGooglePlaceDetail(id);
        setPlaceDetail(data);
      } catch (error) {
        console.error('Failed to fetch place detail:', error);
      }
    };

    fetchPlaceDetail();
  }, [id]);

  const handleOpenURL = (url: string | undefined) => {
    if (url) {
      Linking.openURL(url).catch((err) =>
        console.error('Failed to open URL:', err),
      );
    }
  };

  const getTodayIndex = () => {
    const today = new Date().getDay();
    return today === 0 ? 6 : today - 1;
  };

  const renderReservableParking = () => {
    if (placeDetail?.reservable && placeDetail?.parkingOptions) {
      return '주차 가능, 예약 가능';
    } else if (placeDetail?.reservable) {
      return '예약 가능';
    } else if (placeDetail?.parkingOptions) {
      return '주차 가능';
    }
    return null;
  };

  const renderItem = (
    item: { name: string },
    index: number,
    length: number,
  ) => (
    <Image
      key={index}
      source={{
        uri: `https://places.googleapis.com/v1/${item.name}/media?maxHeightPx=400&maxWidthPx=400&key=${GOOGLE_API_KEY}`,
      }}
      style={length > 1 ? styles.carouselItem : styles.photo}
    />
  );

  const renderCarousel = () => {
    if (!placeDetail || !placeDetail.photos || placeDetail.photos.length === 0)
      return (
        <View style={styles.emptyContainmer}>
          <Icon type="Lock" />
        </View>
      );

    if (placeDetail.photos.length === 1) {
      return renderItem(placeDetail.photos[0], 0, 1);
    } else {
      return (
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
        >
          {placeDetail.photos.map((photo, index) =>
            renderItem(photo, index, placeDetail.photos?.length || 0),
          )}
        </ScrollView>
      );
    }
  };

  const todayIndex = getTodayIndex();

  if (isScaleUp) {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.navigator}>
          <Pressable onPress={() => setIsScaleUp(false)}>
            <Icon type="Before1LineM" />
          </Pressable>
          <Text style={styles.centerText}>장소 보기</Text>
        </View>
        <Map
          latitude={placeDetail?.location.latitude}
          longitude={placeDetail?.location.longitude}
          style={{ flex: 1 }}
        />
        <View style={[styles.hoverContainer, { bottom: 86 }]}>
          <PlaceCard
            imageUrl={placeDetail?.photos && placeDetail?.photos[0].name}
            displayName={placeDetail?.displayName.text}
            address={placeDetail?.formattedAddress}
            onPress={() => setIsScaleUp(false)}
          />
        </View>
        <View style={[styles.hoverContainer, { bottom: 10 }]}>
          <Button
            title={'동선 추가'}
            onPress={() => {}}
            type={'outline'}
            width={320}
            size={'l'}
            color={'Primary'}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.navigator}>
          <Pressable onPress={goBack}>
            <Icon type="Before1LineM" style={{ width: '100%' }} />
          </Pressable>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleTopContainer}>
            <View style={styles.titleTextContainer}>
              {placeDetail?.primaryTypeDisplayName && (
                <Text style={styles.primaryType}>
                  {placeDetail.primaryTypeDisplayName?.text}
                </Text>
              )}
              <Text style={styles.displayName}>
                {placeDetail?.displayName.text}
              </Text>
            </View>
            <Icon type="SharingL" />
          </View>
          {renderCarousel()}
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detailFrame}>
            <Icon type="LocationR" />
            <Text
              style={styles.detailText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {placeDetail?.formattedAddress}
            </Text>
          </View>
          {placeDetail?.currentOpeningHours && (
            <View style={[styles.detailFrame, { alignItems: 'flex-start' }]}>
              <Icon type="TimeR" />
              <View style={styles.weekdayContainer}>
                {placeDetail.currentOpeningHours.weekdayDescriptions[
                  todayIndex
                ] && (
                  <View style={styles.todayContainer}>
                    <View style={styles.toggleContainer}>
                      <Text
                        style={[styles.detailText, styles.boldText]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {
                          placeDetail.currentOpeningHours.weekdayDescriptions[
                            todayIndex
                          ]
                        }
                      </Text>
                      <Pressable onPress={handleToggle}>
                        <Icon type={isExpanded ? 'Up1LineR' : 'Down1LineR'} />
                      </Pressable>
                    </View>
                    <Text
                      style={[
                        styles.additionalInfoText,
                        isExpanded && styles.additionalInfoTextExpanded,
                      ]}
                    >
                      휴무일, 브레이크 타임 등 자세한 정보는 매장 확인 바랍니다.
                    </Text>
                  </View>
                )}
                {isExpanded &&
                  placeDetail.currentOpeningHours.weekdayDescriptions.map(
                    (description, index) => (
                      <Text
                        key={description}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={[
                          styles.detailText,
                          { marginBottom: 6 },
                          index === todayIndex && styles.boldText,
                        ]}
                      >
                        {description}
                      </Text>
                    ),
                  )}
              </View>
            </View>
          )}
          {placeDetail?.nationalPhoneNumber && (
            <View style={styles.detailFrame}>
              <Icon type="CallR" />
              <Text style={styles.detailText}>
                {placeDetail.nationalPhoneNumber}
              </Text>
            </View>
          )}
          {placeDetail?.websiteUri && (
            <Pressable
              onPress={() => handleOpenURL(placeDetail.websiteUri)}
              style={styles.detailFrame}
            >
              <Icon type="Global" />
              <Text style={styles.uriText}>{placeDetail.websiteUri}</Text>
            </Pressable>
          )}
          {renderReservableParking() && (
            <View style={styles.detailFrame}>
              <Icon type="TimeR" />
              <Text style={styles.detailText}>{renderReservableParking()}</Text>
            </View>
          )}
        </View>
        <View
          style={[styles.mapContainer, { paddingBottom: 8 + insets.bottom }]}
        >
          <View style={styles.mapTextContainer}>
            <Text style={styles.mapText}>지도</Text>
            <Button
              title={'크게 보기'}
              onPress={() => setIsScaleUp(true)}
              type={'text'}
              size={'s'}
              color={'Gray'}
            />
          </View>
          <Map
            latitude={placeDetail?.location.latitude}
            longitude={placeDetail?.location.longitude}
            height={200}
            style={{ marginBottom: 32, borderRadius: 12 }}
          />
          <Button
            title={'동선 추가'}
            onPress={() =>
              handleEvent(
                placeDetail?.displayName.text || '',
                placeDetail?.primaryTypeDisplayName?.text,
              )
            }
            type={'outline'}
            size={'l'}
            color={'Primary'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.grayScale25,
    flex: 1,
  },
  hoverContainer: {
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigator: {
    backgroundColor: 'transparent',
    height: 44,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  centerText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.grayScale600,
  },
  titleContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginTop: 8,
    paddingBottom: 20,
  },
  primaryType: {
    color: Colors.grayScale400,
    fontSize: 12,
    lineHeight: 18,
  },
  displayName: {
    color: Colors.grayScale800,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
  },
  detailContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 8,
    gap: 12,
  },
  detailText: {
    color: Colors.grayScale700,
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 12,
  },
  uriText: {
    color: Colors.primary300,
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 12,
    textDecorationLine: 'underline',
  },
  detailFrame: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weekdayContainer: {
    flexDirection: 'column',
  },
  mapContainer: {
    backgroundColor: Colors.white,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  mapText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.grayScale800,
  },
  boldText: {
    fontWeight: '700',
  },
  todayContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
  },
  additionalInfoText: {
    fontSize: 11,
    color: Colors.feedbackR200,
    marginLeft: 12,
  },
  additionalInfoTextExpanded: {
    marginBottom: 12,
  },
  photo: {
    width: '100%',
    height: 156,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 8,
  },
  carouselContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8,
  },
  carouselItem: {
    width: 156,
    height: 156,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  titleTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleTextContainer: {},
  emptyContainmer: {
    width: '100%',
    height: 156,
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
});
