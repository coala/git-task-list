function getTrackerInfo(org, trackerType, property) {
  if (org && org.trackers) {
    return org.trackers
      .filter(tracker => tracker.type === trackerType)
      .map(tracker => tracker[property]).compact();
  }
  return [];
}
export function getTrackerIdentifiers(org, trackerType) {
  return getTrackerInfo(org, trackerType, 'identifier');
}

export function getTrackerDefaultLabels(org, trackerType) {
  return getTrackerInfo(org, trackerType, 'defaultLabels');
}
