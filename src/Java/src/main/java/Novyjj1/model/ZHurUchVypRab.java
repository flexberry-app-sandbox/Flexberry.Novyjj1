package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

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

    @Column(name = "ВыпОбРаб")
    private Float выпобраб;

    @Column(name = "ПерВыпС")
    private Date первыпс;

    @Column(name = "ПерВыпПо")
    private Date первыппо;

    @Column(name = "Длит")
    private Integer длит;


    public ZHurUchVypRab() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
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

    public Date getПерВыпПо() {
      return первыппо;
    }

    public void setПерВыпПо(Date первыппо) {
      this.первыппо = первыппо;
    }

    public Integer getДлит() {
      return длит;
    }

    public void setДлит(Integer длит) {
      this.длит = длит;
    }


}