package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЖурУчВыпРаб
 */
@Entity(name = "IISNovyjj1ЖурУчВыпРаб")
@Table(schema = "public", name = "ЖурУчВыпРаб")
public class ZHurUchVypRab {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Длит")
    private Integer длит;

    @Column(name = "ПерВыпПо")
    private Date первыппо;

    @Column(name = "ВыпОбРаб")
    private Float выпобраб;

    @Column(name = "ПерВыпС")
    private Date первыпс;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprSotr")
    @Convert("SprSotr")
    @Column(name = "СпрСотр", length = 16, unique = true, nullable = false)
    private UUID _sprsotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprSotr", insertable = false, updatable = false)
    private SprSotr sprsotr;


    public ZHurUchVypRab() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getДлит() {
      return длит;
    }

    public void setДлит(Integer длит) {
      this.длит = длит;
    }

    public Date getПерВыпПо() {
      return первыппо;
    }

    public void setПерВыпПо(Date первыппо) {
      this.первыппо = первыппо;
    }

    public Float getВыпОбРаб() {
      return выпобраб;
    }

    public void setВыпОбРаб(Float выпобраб) {
      this.выпобраб = выпобраб;
    }

    public Date getПерВыпС() {
      return первыпс;
    }

    public void setПерВыпС(Date первыпс) {
      this.первыпс = первыпс;
    }


}