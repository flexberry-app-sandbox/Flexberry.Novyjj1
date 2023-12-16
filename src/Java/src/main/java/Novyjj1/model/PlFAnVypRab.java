package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПлФАнВыпРаб
 */
@Entity(name = "IISNovyjj1ПлФАнВыпРаб")
@Table(schema = "public", name = "ПлФАнВыпРаб")
public class PlFAnVypRab {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВыпСум")
    private Float выпсум;

    @Column(name = "ВсегоСум")
    private Float всегосум;

    @Column(name = "ПланОб")
    private Float планоб;

    @Column(name = "ВыпОб")
    private Float выпоб;

    @Column(name = "ВсегоОб")
    private Float всегооб;

    @Column(name = "ПланСум")
    private Float плансум;

    @Column(name = "РеализоСум")
    private Float реализосум;

    @Column(name = "РеализовОб")
    private Float реализовоб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprSotr")
    @Convert("SprSotr")
    @Column(name = "СпрСотр", length = 16, unique = true, nullable = false)
    private UUID _sprsotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprSotr", insertable = false, updatable = false)
    private SprSotr sprsotr;


    public PlFAnVypRab() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getВыпСум() {
      return выпсум;
    }

    public void setВыпСум(Float выпсум) {
      this.выпсум = выпсум;
    }

    public Float getВсегоСум() {
      return всегосум;
    }

    public void setВсегоСум(Float всегосум) {
      this.всегосум = всегосум;
    }

    public Float getПланОб() {
      return планоб;
    }

    public void setПланОб(Float планоб) {
      this.планоб = планоб;
    }

    public Float getВыпОб() {
      return выпоб;
    }

    public void setВыпОб(Float выпоб) {
      this.выпоб = выпоб;
    }

    public Float getВсегоОб() {
      return всегооб;
    }

    public void setВсегоОб(Float всегооб) {
      this.всегооб = всегооб;
    }

    public Float getПланСум() {
      return плансум;
    }

    public void setПланСум(Float плансум) {
      this.плансум = плансум;
    }

    public Float getРеализоСум() {
      return реализосум;
    }

    public void setРеализоСум(Float реализосум) {
      this.реализосум = реализосум;
    }

    public Float getРеализовОб() {
      return реализовоб;
    }

    public void setРеализовОб(Float реализовоб) {
      this.реализовоб = реализовоб;
    }


}