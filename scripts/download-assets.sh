#!/bin/bash
# Download all external assets from hakhel.info to local public/ folder
# Run from project root: bash scripts/download-assets.sh

set -e

TOTAL=0
SUCCESS=0
FAIL=0

download() {
  local url="$1"
  local dest="$2"
  TOTAL=$((TOTAL + 1))
  if [ -f "$dest" ]; then
    echo "  SKIP (exists): $(basename "$dest")"
    SUCCESS=$((SUCCESS + 1))
    return
  fi
  if curl -fsSL --max-time 30 -o "$dest" "$url" 2>/dev/null; then
    echo "  OK: $(basename "$dest")"
    SUCCESS=$((SUCCESS + 1))
  else
    echo "  FAIL: $url"
    FAIL=$((FAIL + 1))
  fi
}

echo "=== Downloading PDFs from archivesPublicService ==="
PDF_DIR="public/pdfs"
mkdir -p "$PDF_DIR"

# Calendars & Schedules
download "https://www.hakhel.info/archivesPublicService/KitzurShulchanAruchYomiSchedule.pdf" "$PDF_DIR/KitzurShulchanAruchYomiSchedule.pdf"
download "https://www.hakhel.info/archivesPublicService/LimudMishnayosChart.pdf" "$PDF_DIR/LimudMishnayosChart.pdf"
download "https://www.hakhel.info/archivesPublicService/DafHayomiBHalacha.pdf" "$PDF_DIR/DafHayomiBHalacha.pdf"
download "https://www.hakhel.info/archivesPublicService/LearningCalendarYomi5780.pdf" "$PDF_DIR/LearningCalendarYomi5780.pdf"

# Reference Tables
download "https://www.hakhel.info/archivesPublicService/HalachicMeasures.pdf" "$PDF_DIR/HalachicMeasures.pdf"
download "https://www.hakhel.info/archivesPublicService/MispallelLocationChart.pdf" "$PDF_DIR/MispallelLocationChart.pdf"
download "https://www.hakhel.info/archivesPublicService/KarbanosChart.JPG" "$PDF_DIR/KarbanosChart.JPG"

# Tefillah Aids & Kavanos
download "https://www.hakhel.info/archivesPublicService/KaddishFlyer-English.pdf" "$PDF_DIR/KaddishFlyer-English.pdf"
download "https://www.hakhel.info/archivesPublicService/KaddishFlyer-Hebrew.pdf" "$PDF_DIR/KaddishFlyer-Hebrew.pdf"
download "https://www.hakhel.info/archivesPublicService/13MiddosEnglish.pdf" "$PDF_DIR/13MiddosEnglish.pdf"
download "https://www.hakhel.info/archivesPublicService/13MiddosHebrew.pdf" "$PDF_DIR/13MiddosHebrew.pdf"
download "https://www.hakhel.info/archivesPublicService/Ashamnu.pdf" "$PDF_DIR/Ashamnu.pdf"
download "https://www.hakhel.info/archivesPublicService/AmenYeheiShemeiRabbah.pdf" "$PDF_DIR/AmenYeheiShemeiRabbah.pdf"
download "https://www.hakhel.info/archivesPublicService/AmeinResponse.pdf" "$PDF_DIR/AmeinResponse.pdf"
download "https://www.hakhel.info/archivesPublicService/KavanahImagery.pdf" "$PDF_DIR/KavanahImagery.pdf"
download "https://www.hakhel.info/archivesPublicService/ShemoneEsreiChecklist.pdf" "$PDF_DIR/ShemoneEsreiChecklist.pdf"
download "https://www.hakhel.info/archivesPublicService/BentchingPoster.pdf" "$PDF_DIR/BentchingPoster.pdf"
download "https://www.hakhel.info/archivesPublicService/KavanahforShemHashem.pdf" "$PDF_DIR/KavanahforShemHashem.pdf"
download "https://www.hakhel.info/archivesPublicService/KavanosforShemaBrocha.pdf" "$PDF_DIR/KavanosforShemaBrocha.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillahAlHaGeulah.pdf" "$PDF_DIR/TefillahAlHaGeulah.pdf"
download "https://www.hakhel.info/archivesPublicService/PrayerfortheGeulahEnglish.pdf" "$PDF_DIR/PrayerfortheGeulahEnglish.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillasChofetzChaim.pdf" "$PDF_DIR/TefillasChofetzChaim.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillaAlHaParnassa.pdf" "$PDF_DIR/TefillaAlHaParnassa.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillasChazonIsh.pdf" "$PDF_DIR/TefillasChazonIsh.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillasHaShlah.pdf" "$PDF_DIR/TefillasHaShlah.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillahLostObjects.pdf" "$PDF_DIR/TefillahLostObjects.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillahKaas.pdf" "$PDF_DIR/TefillahKaas.pdf"
download "https://www.hakhel.info/archivesPublicService/TeshuvahTefillah.pdf" "$PDF_DIR/TeshuvahTefillah.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillahforEmunahandBitachon.pdf" "$PDF_DIR/TefillahforEmunahandBitachon.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillahBeforeVisitingDoctor.pdf" "$PDF_DIR/TefillahBeforeVisitingDoctor.pdf"
download "https://www.hakhel.info/archivesPublicService/PrayerCemetery.pdf" "$PDF_DIR/PrayerCemetery.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillahBeforeMenorahLighting.pdf" "$PDF_DIR/TefillahBeforeMenorahLighting.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillahforTuBShevat.pdf" "$PDF_DIR/TefillahforTuBShevat.pdf"
download "https://www.hakhel.info/archivesPublicService/ThankYouTefillah.pdf" "$PDF_DIR/ThankYouTefillah.pdf"
download "https://www.hakhel.info/archivesPublicService/PesukimBitachon.pdf" "$PDF_DIR/PesukimBitachon.pdf"

# Archives
download "https://www.hakhel.info/archivesPublicService/LandMarks.pdf" "$PDF_DIR/LandMarks.pdf"
download "https://www.hakhel.info/archivesPublicService/Le'AnavimYiteinChein.pdf" "$PDF_DIR/LeAnavimYiteinChein.pdf"
download "https://www.hakhel.info/archivesPublicService/AhlCheitArchives.pdf" "$PDF_DIR/AhlCheitArchives.pdf"
download "https://www.hakhel.info/archivesPublicService/HilchosSukkah.pdf" "$PDF_DIR/HilchosSukkah.pdf"
download "https://www.hakhel.info/archivesPublicService/HizharuBichvodChaveireichem.pdf" "$PDF_DIR/HizharuBichvodChaveireichem.pdf"
download "https://www.hakhel.info/archivesPublicService/RavSalanter13Middos.pdf" "$PDF_DIR/RavSalanter13Middos.pdf"

# Guidelines
download "https://www.hakhel.info/archivesPublicService/ShidduchGuidelinesforLH.pdf" "$PDF_DIR/ShidduchGuidelinesforLH.pdf"
download "https://www.hakhel.info/archivesPublicService/SixConstantMitzvos.pdf" "$PDF_DIR/SixConstantMitzvos.pdf"
download "https://www.hakhel.info/archivesPublicService/SixConstantMitzvosPoster.pdf" "$PDF_DIR/SixConstantMitzvosPoster.pdf"
download "https://www.hakhel.info/archivesPublicService/HappinessPrinciples.pdf" "$PDF_DIR/HappinessPrinciples.pdf"
download "https://www.hakhel.info/archivesPublicService/CCHFTenRules.pdf" "$PDF_DIR/CCHFTenRules.pdf"
download "https://www.hakhel.info/archivesPublicService/LHWorkplace.pdf" "$PDF_DIR/LHWorkplace.pdf"
download "https://www.hakhel.info/archivesPublicService/SafetyInfo.pdf" "$PDF_DIR/SafetyInfo.pdf"
download "https://www.hakhel.info/archivesPublicService/SummerKashrusReminders.pdf" "$PDF_DIR/SummerKashrusReminders.pdf"
download "https://www.hakhel.info/archivesPublicService/KICKaporosSuggestions.pdf" "$PDF_DIR/KICKaporosSuggestions.pdf"
download "https://www.hakhel.info/archivesPublicService/CerealsBrachosList.pdf" "$PDF_DIR/CerealsBrachosList.pdf"
download "https://www.hakhel.info/archivesCABs/HAKHELCOMMUNITYAWARENESSBULLETINSpecialEditionPesach5765.pdf" "$PDF_DIR/HAKHELCOMMUNITYAWARENESSBULLETINSpecialEditionPesach5765.pdf"
download "https://www.hakhel.info/archivesCABs/HAKHELCOMMUNITYAWARENESSBULLETINSpecialEdition%20Eruv.pdf" "$PDF_DIR/HAKHELCOMMUNITYAWARENESSBULLETINSpecialEditionEruv.pdf"

# Tefillin
download "https://www.hakhel.info/archivesPublicService/KedushasTefillinIssue1.pdf" "$PDF_DIR/KedushasTefillinIssue1.pdf"
download "https://www.hakhel.info/archivesPublicService/TefillinCard.pdf" "$PDF_DIR/TefillinCard.pdf"

echo ""
echo "=== Downloading Special Collection HTML pages ==="
SPECIAL_DIR="public/archives/special"
mkdir -p "$SPECIAL_DIR"

download "https://www.hakhel.info/48WaysArchives.html" "$SPECIAL_DIR/48WaysArchives.html"
download "https://www.hakhel.info/TefillahArchive.html" "$SPECIAL_DIR/TefillahArchive.html"
download "https://www.hakhel.info/RabbiWebsterBishulTest.html" "$SPECIAL_DIR/RabbiWebsterBishulTest.html"
download "https://www.hakhel.info/RabbiBodnerDailyArchive.html" "$SPECIAL_DIR/RabbiBodnerDailyArchive.html"
download "https://www.hakhel.info/ShidduchQuestionsArchive.html" "$SPECIAL_DIR/ShidduchQuestionsArchive.html"
download "https://www.hakhel.info/WordsDailyArchive.html" "$SPECIAL_DIR/WordsDailyArchive.html"
download "https://www.hakhel.info/SeferMitzvosHaKatzar.html" "$SPECIAL_DIR/SeferMitzvosHaKatzar.html"

echo ""
echo "=== Downloading Daily Email Archive HTML pages ==="
ARCHIVE_DIR="public/archives/emails"
mkdir -p "$ARCHIVE_DIR"

for year in $(seq 2006 2020); do
  yy=$(printf "%02d" $((year % 100)))
  for month in Jan Feb March April May June July Aug Sept Oct Nov Dec; do
    download "https://www.hakhel.info/${month}${yy}DailyEmail.html" "$ARCHIVE_DIR/${month}${yy}DailyEmail.html"
  done
done

# 2005 (partial year, some .htm)
for month in July Aug Sept Nov Dec; do
  download "https://www.hakhel.info/${month}05DailyEmail.htm" "$ARCHIVE_DIR/${month}05DailyEmail.htm"
done

# 2007 has some .htm files
download "https://www.hakhel.info/Feb07DailyEmail.htm" "$ARCHIVE_DIR/Feb07DailyEmail.htm"
download "https://www.hakhel.info/April07DailyEmail.htm" "$ARCHIVE_DIR/April07DailyEmail.htm"

echo ""
echo "=== DONE ==="
echo "Total: $TOTAL | Success: $SUCCESS | Failed: $FAIL"
